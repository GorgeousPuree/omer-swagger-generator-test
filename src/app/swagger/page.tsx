import generateOpenApiSpec from "@omer-x/next-openapi-json-generator";
import ReactSwagger from "@/components/ReactSwagger";
import { LicenceDTO } from "@/models/license";

const Page = async () => {
  const spec = await generateOpenApiSpec({
    LicenceDTO,
  });
  return <ReactSwagger spec={spec} />;
};

export default Page;
