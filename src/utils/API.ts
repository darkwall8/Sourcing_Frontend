import { LocalStorageManager } from "./functions/LocalStorageManager";

export default class API {
  private _devApiUrl: string = "http://localhost:";
  private _imagePath: string = "http://localhost:/"

  public get apiUrl() {
    return this._devApiUrl;
  }
  public get imagePath() {
    return this._imagePath;
  }

  async getData(url: string) {
    let response = null;

    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LocalStorageManager.getItem("token")}`,
      },
    })

    const responseJson = await response.json();
    return responseJson;
  }

  async postData(
    url: string,
    data?: JSON | FormData,
    isMultipart?: boolean
  ) {
    let response: Response;

    if (isMultipart) {
      response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LocalStorageManager.getItem("token")}`,
        },
        body: data as BodyInit,
      });
    } else {
      response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LocalStorageManager.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
    }
    const responseJson = await response.json();
    return responseJson;
  }

  async putData(
    url: string,
    data: JSON | FormData,
    isMultipart?: boolean
  ) {
    let response: Response;
    if (isMultipart) {
      response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${LocalStorageManager.getItem("token")}`,
        },
        body: data as BodyInit,
      });
    } else {
      response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${LocalStorageManager.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });
    }
    const responseJson = await response.json();
    return responseJson;
  }

  async deleteData(url: string, data?: JSON) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LocalStorageManager.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}
