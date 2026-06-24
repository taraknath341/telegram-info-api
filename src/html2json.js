import { parseHTML } from "linkedom";

const HTML2JSON = (html) => {
   const { document } = parseHTML(html);
   const $ = property => document.head.querySelector(`meta[property=${property}]`).content;

   const userInfo = {
      title: $("og:title"),
      image: $("og:image"),
      description: $("og:description"),
      url: $("al:ios:url")
   }

   return userInfo;
}

export default HTML2JSON;