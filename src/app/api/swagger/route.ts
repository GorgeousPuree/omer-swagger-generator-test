import { GetOrdersRequestDTO, NewOrderImageDTO, PaginationRequestDTO } from "@/models/order";
import generateOpenApiSpec from "@omer-x/next-openapi-json-generator";

export async function GET() {
  const spec = await generateOpenApiSpec({
    PaginationRequestDTO,
    GetOrdersRequestDTO,
    NewOrderImageDTO
  }, {
    clearUnusedSchemas: false
  });

  return Response.json(spec);
}
