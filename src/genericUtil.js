// Make this for each within src/uitls

import { useState } from "react";
import GenericAPI from "../API/GenericAPI";
import { useNavigation } from "@react-navigation/native";


export default function useEarnings() {
  const [loading, setLoading] = useState(false);

  const apiObject = new GenericAPI();
  const navigation = useNavigation();


  return {
    loading,

    async getData(filters) {
      setLoading(true);
      const uuid = await getUUID()
      const response = await apiObject.graphQL("/graphql",
        `

        `,
        filters
      );
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigation.push("login");
        }, 2000)

      }

      return response;
    },
  };
}
