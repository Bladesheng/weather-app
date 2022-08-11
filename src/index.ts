import "./style.scss";
import { MET } from "./modules/MET";

await MET.get();

MET.logCurrentTemp();
