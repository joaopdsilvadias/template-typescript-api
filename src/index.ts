import server from "./server";
import dotenv from "dotenv";

dotenv.config();

server.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is running on port ${process.env.EXPRESS_PORT}`);
});