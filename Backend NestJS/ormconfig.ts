import { Ratings } from "src/entities/ratings.entity";
import { Traffic } from "src/entities/traffic.entity";
import { Revenue } from "src/entities/revenue.entity";
import { SalesStat } from "src/entities/sales-stat.entity";
import { User } from "src/entities/user.entinty";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: 'tron2017',
    entities: [Ratings, Traffic, Revenue, SalesStat, User],
    synchronize: true
}

export default config;