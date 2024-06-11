import { useState } from "react";
import GenericAPI from "../API/GenericAPI";


export default function useMutations() {
  const [loading, setLoading] = useState(false);
  const apiObject = new GenericAPI();


  return {
    loading,

    async addData(data, resource) {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
        mutation Create($input: GenericScalar!, $resource: String!) {
          CreateObject(input: $input, resource: $resource) {
            error,
            ok
          }
        }
        `,
        { "input": data, "resource": resource }
      );
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000)

      }

      return response;
    },


    async addProductBenchmarks(products, benchmarks) {
      setLoading(true);
      const response = await apiObject.post("/api/admin/upload", { "products": products, "benchmarks": benchmarks }
      );
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000)

      }

      return response;
    },


    async addOpenPOs(openPOs) {
      setLoading(true);

      const response = await apiObject.post("/api/admin/openpo", { "input": openPOs });
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000)

      }

      return response;
    },


    async deleteOpenPO() {
      setLoading(true);
      const response = await apiObject.delete("/api/admin/openpo");
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000)

      }

      return response;
    },


  };
}