import { licenses } from "@/database/schema";
import db from "@/database";

export default async function getLicenses() {
    const res = await db
        .select()
        .from(licenses);

    return res
}
