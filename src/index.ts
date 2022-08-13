import "./style.scss";
import { MET } from "./modules/MET";

const city = "český dub";
await MET.get(city);

MET.logCurrentTemp();
