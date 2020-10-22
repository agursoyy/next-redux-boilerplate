import Axios from 'axios';
import Store from '.';
import queryString from 'query-string';
import getConfig from 'next/config';

type IParams = {
  url: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  form?: {
    [x: string]: any;
  };
  auth?: boolean;
};
const {
  publicRuntimeConfig: { api },
} = getConfig();

export default class Api {
  private apiUrl = api;

  public accessToken?: string;
  public refreshToken?: string;

  constructor(private store: Store) {
    this.store;
    this.fetch({ url: '/todos/1', auth: false });
  }

  public fetch = ({ url, method = 'get', form, auth = true }: IParams, expected?: number) => {
    // expected http response status
    const config = {
      data: {},
      headers: {},
      method,
      url: `${this.apiUrl}${url}`,
    };
    if (auth) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${this.accessToken}`,
      };
    }
    if (form && Object.keys(form).length > 0) {
      if (method === 'get') {
        const queryParams = queryString.stringify(form, { arrayFormat: 'bracket' });
        config.url = `${config.url}?${queryParams}`;
      } else {
        config.data = { ...form };
      }
    }

    return Axios(config)
      .then(({ data, status }) => {
        return expected ? (expected === status ? data : null) : { data, status };
      })
      .catch((err) => {
        if (err.response) {
          const { status, data } = err.response;
          if (status === 401) {
            // if(this.refreshToken ) {} // auth not implemented yet.
          }

          return status === 400 ? data : { data, status };
        }
      });
  };
}
