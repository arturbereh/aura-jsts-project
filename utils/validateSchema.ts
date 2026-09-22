import Ajv, { type JSONSchemaType } from 'ajv';

export function validateSchema<T>(
  data: T,
  schema: object
): void {
  const ajv = new Ajv();

  const validate = ajv.compile(schema);

  const isValid = validate(data);

  if (!isValid) {
    throw new Error(
      `Schema validation failed: ${JSON.stringify(validate.errors)}`
    );
  }
}