import { useState } from "react";
import GenericAPI from "./../API/GenericAPI";
import { useNavigate } from "react-router-dom";

export default function useAdmin() {
  const [loading, setLoading] = useState(false);
  const apiObject = new GenericAPI();

  const navigate = useNavigate();


  return {
    loading,

    async get(resource, page, page_size, get_options=null) {

      setLoading(true);

      let params = { 'page': page, 'page_size': page_size }
      if(get_options)
          params['options'] = '1'


      const response = await apiObject.get('/api/admin/' + resource, params)
      setLoading(false);

      if (response.code === -2) {
        navigate("/");
      }

      return response
    },


    async write(resource, data, isNew) {

      let url = ''
      if (isNew === true)
        url = '/api/admin/' + resource 
      else
        url = '/api/admin/' + resource + '/' + data.uuid;

      const formData = new FormData();


      setLoading(true);
      const response = await apiObject.put(url, data);
      setLoading(false);

      if (response.code === -2) {
        navigate("/");
      }

      return response
    },


    async remove(resource, uuid) {

      setLoading(true);
      const response = await apiObject.delete('/api/admin/' + resource + '/' + uuid);
      setLoading(false);

      if (response.code === -2) {
        navigate("/");
      }

      return response
    },


    async getUsers() {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
          query Users {
            users {
            edges {
              node {
                uuid, name, phone, designation, group
              }
            }
          }
        }
        `,
        {}
      );
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      }

      return response;
    },


    async getCompanies(page = 1, pageSize = 20) {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
          query Companies {
            companies {
            edges {
              node {
                uuid, name
              }
            }
          }
        }
        `,
        {}
      );

      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      }

      return response;
    },

    async getDepartments() {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
          query Departments {
            departments {
            edges {
              node {
                uuid, name, head, type
              }
            }
          }
        }
        `,
        {}
      );

      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      }

      return response;
    },


    async getProducts() {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
          query Products {
            products {
            edges {
              node {
                partNum, description, details, company { name }, materialGroup, revision
              }
            }
          }
        }
        `,
        {}
      );

      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      }

      return response;
    },


    async getStages() {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
          query Stages {
            stages {
            edges {
              node {
                uuid, name, department {name}
              }
            }
          }
        }
        `,
        {}
      );

      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      }

      return response;
    },


    async getInventory() {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
        query Inventory {
          inventories {
          edges {
            node {
              uuid, name, description, type, quantity, unitPrice
            }
          }
        }
      }
        `,
        {}
      );

      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigate('/login')
        }, 2000)

      }

      return response;
    },



  };
}