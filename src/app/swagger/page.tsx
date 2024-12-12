import generateOpenApiSpec from "@omer-x/next-openapi-json-generator";
import ReactSwagger from "@/components/ReactSwagger";
import { GetOrdersRequestDTO, NewOrderImageDTO, PaginationRequestDTO } from "@/models/order";

const Page = async () => {
  const spec = await generateOpenApiSpec({
    PaginationRequestDTO,
    GetOrdersRequestDTO,
    NewOrderImageDTO,
  });
  return <ReactSwagger spec={spec} />;
};

export default Page;
