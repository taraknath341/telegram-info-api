import HTML2JSON from "./html2json.js";

const telegramUserDetails = async (req, res) => {
   const { username } = req.params;
   const response = await fetch(`https://telegram.dog/${username}`);
   const html = await response.text();
   const json = HTML2JSON(html);
   if (json.image === "https://telegram.org/img/t_logo_2x.png") {
      throw {
         error: "Telegram User Not Found",
         status: 404
      }
   }
   res.send(json);
}

const rootRoute = (req, res) => {
   res.append("content-type", "text/html");
   res.status(400).send(`
      username must be send
      <br>
      <a href="/taraknath341">Example</a>
   `);
}

export { rootRoute, telegramUserDetails };