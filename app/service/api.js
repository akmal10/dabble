import  * as CONSTANTS from '@app/Constants';

const BASE_URL = CONSTANTS.SERVER_BASE_URL;

export const api = async (url, method, body = null, headers = {}) => {

    try {
      //console.log(body);
      const endPoint = BASE_URL.concat(url);
      //const reqBody = body ? JSON.stringify(body) : null;
      let queryString = null;
      if(body)
        queryString = Object.keys(body).map(key => key + '=' + body[key]).join('&');

      const reqBody = queryString ? queryString : null;

      const fetchParams = {method, headers};

      if((method === "POST" || method === "PUT") && !reqBody) {
          throw new Error("Request body required");
      }

      console.log(reqBody);

      fetchParams.headers["Content-type"] = "application/json";
      //fetchParams.body = new URLSearchParams();
      fetchParams.redirect = 'follow';

     /*  if(reqBody) {
          //fetchParams.headers["Content-type"] = "application/x-www-form-urlencoded";
          fetchParams.headers["Content-type"] = "application/json";
          fetchParams.body = reqBody;
      } */

      console.log(endPoint);
      console.log(fetchParams);

      const fetchPromise = fetch(endPoint, fetchParams);
      const timeOutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject("Request Timeout");
              //reject({message : "Network Connection Error"});
          }, 25000);
      });

      const response = await Promise.race([fetchPromise, timeOutPromise]);

      console.log(response);

      return response;
    } catch (e) {
        //COMMONFUNCTIONS.commonMessageToast('Network Connection Error. '+'\n'+'Connect the internet & check again.')
        console.log('Error 123');
        return e;
    }
}

export const fetchApi = async (url, method, body, statusCode, token = null, loader = false) => {
    try {
        const headers = { "Content-type": "application/json" }
        const result = {
            token: null,
            success: false,
            responseBody: null
        };
        if(token) {
            headers["x-auth"] = token;
        }

        console.log(url);
        console.log(body);

        const response = await api(url, method, body, headers);

        console.log(response);

        if(response.status === statusCode) {
            result.success = true;

            if(response.headers.get("x-auth")) {
                result.token = response.headers.get("x-auth");
            }

            let responseBody;
            const responseText = await response.text();

            console.log(responseText);

            try {
                responseBody = JSON.parse(responseText);
            } catch (e) {
                responseBody = responseText;
            }

            result.responseBody = responseBody;

            console.log(result);
            return result;

        }
        /* else if(error !== undefined) {
            return error;
        } */

        let errorBody;
        //const errorText = await response.text();
        const errorText = await response;

        try {
            errorBody = JSON.parse(await response.text());
        } catch (e) {
            errorBody = await response;
        }
        result.responseBody = errorBody;
        result.errorMessage = errorBody;

        console.log(result);

        throw result;
    } catch (error) {
        return error;
    }
}
