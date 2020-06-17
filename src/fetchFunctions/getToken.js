const axios = require("axios");
const qs = require("qs");
// const ID = "950efa4a863a439693d96345cb303829";
// const secret = "ca0b324feab140938c8785db1adca4ed";

export default function (id, secret) {
  const auth = "Basic " + new Buffer.from(id + ":" + secret).toString("base64");
  const data = qs.stringify({ grant_type: "client_credentials" });

  const opt = {
    method: "post",
    headers: {
      Authorization: auth,
    },
    url: "https://accounts.spotify.com/api/token",
    data: data,
  };

  return axios(opt).then((res) => {
    const token = res.data;
    return token;
  });
}