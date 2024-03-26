import {
  FieldType,
  FieldSubtype,
  INTERNAL_TABLE_SOURCE_ID,
  AutoFieldSubType,
  Hosting,
} from "@budibase/types"
export { RelationshipType } from "@budibase/types"

export const AUTO_COLUMN_SUB_TYPES = AutoFieldSubType

export const AUTO_COLUMN_DISPLAY_NAMES = {
  AUTO_ID: "Auto ID",
  CREATED_BY: "Created By",
  CREATED_AT: "Created At",
  UPDATED_BY: "Updated By",
  UPDATED_AT: "Updated At",
}

export const FIELDS = {
  STRING: {
    name: "Text",
    type: FieldType.STRING,
    icon: "Text",
    constraints: {
      type: "string",
      length: {},
      presence: false,
    },
  },
  BARCODEQR: {
    name: "Barcode/QR",
    type: FieldType.BARCODEQR,
    icon: "Camera",
    constraints: {
      type: "string",
      length: {},
      presence: false,
    },
  },
  LONGFORM: {
    name: "Long Form Text",
    type: FieldType.LONGFORM,
    icon: "TextAlignLeft",
    constraints: {
      type: "string",
      length: {},
      presence: false,
    },
  },
  OPTIONS: {
    name: "Options",
    type: FieldType.OPTIONS,
    icon: "Dropdown",
    constraints: {
      type: "string",
      presence: false,
      inclusion: [],
    },
  },
  ARRAY: {
    name: "Multi-select",
    type: FieldType.ARRAY,
    icon: "Duplicate",
    constraints: {
      type: "array",
      presence: false,
      inclusion: [],
    },
  },
  NUMBER: {
    name: "Number",
    type: FieldType.NUMBER,
    icon: "123",
    constraints: {
      type: "number",
      presence: false,
      numericality: { greaterThanOrEqualTo: "", lessThanOrEqualTo: "" },
    },
  },
  BIGINT: {
    name: "BigInt",
    type: FieldType.BIGINT,
    icon: "TagBold",
  },
  BOOLEAN: {
    name: "Boolean",
    type: FieldType.BOOLEAN,
    icon: "Boolean",
    constraints: {
      type: "boolean",
      presence: false,
    },
  },
  DATETIME: {
    name: "Date/Time",
    type: FieldType.DATETIME,
    icon: "Calendar",
    constraints: {
      type: "string",
      length: {},
      presence: false,
      datetime: {
        latest: "",
        earliest: "",
      },
    },
  },
  ATTACHMENT: {
    name: "Attachment",
    type: FieldType.ATTACHMENT,
    icon: "Multiple",
    constraints: {
      type: "array",
      presence: false,
    },
  },
  ATTACHMENT_SINGLE: {
    name: "Attachment",
    type: FieldType.ATTACHMENT_SINGLE,
    icon: "Folder",
    constraints: {
      presence: false,
    },
  },
  LINK: {
    name: "Relationship",
    type: FieldType.LINK,
    icon: "Link",
    constraints: {
      type: "array",
      presence: false,
    },
  },
  AUTO: {
    name: "Auto Column",
    type: FieldType.AUTO,
    icon: "MagicWand",
    constraints: {},
  },
  FORMULA: {
    name: "Formula",
    type: FieldType.FORMULA,
    icon: "Calculator",
    constraints: {},
  },
  JSON: {
    name: "JSON",
    type: FieldType.JSON,
    icon: "Brackets",
    constraints: {
      type: "object",
      presence: false,
    },
  },
  USER: {
    name: "User",
    type: FieldType.BB_REFERENCE,
    subtype: FieldSubtype.USER,
    icon: "User",
  },
  USERS: {
    name: "Users",
    type: FieldType.BB_REFERENCE,
    subtype: FieldSubtype.USERS,
    icon: "User",
    constraints: {
      type: "array",
    },
  },
}

export const FILE_TYPES = {
  IMAGE: ["png", "tiff", "gif", "raw", "jpg", "jpeg"],
  CODE: ["js", "rs", "py", "java", "rb", "hs", "yml"],
  DOCUMENT: ["odf", "docx", "doc", "pdf", "csv"],
}

export const HostingTypes = Hosting

export const Roles = {
  ADMIN: "ADMIN",
  POWER: "POWER",
  BASIC: "BASIC",
  PUBLIC: "PUBLIC",
  BUILDER: "BUILDER",
}

export function isAutoColumnUserRelationship(subtype) {
  return (
    subtype === AUTO_COLUMN_SUB_TYPES.CREATED_BY ||
    subtype === AUTO_COLUMN_SUB_TYPES.UPDATED_BY
  )
}

export const PrettyRelationshipDefinitions = {
  MANY: "Many rows",
  ONE: "One row",
}

export const ALLOWABLE_STRING_OPTIONS = [
  FIELDS.STRING,
  FIELDS.OPTIONS,
  FIELDS.LONGFORM,
  FIELDS.BARCODEQR,
]
export const ALLOWABLE_STRING_TYPES = ALLOWABLE_STRING_OPTIONS.map(
  opt => opt.type
)

export const ALLOWABLE_NUMBER_OPTIONS = [FIELDS.NUMBER, FIELDS.BOOLEAN]
export const ALLOWABLE_NUMBER_TYPES = ALLOWABLE_NUMBER_OPTIONS.map(
  opt => opt.type
)

export const SWITCHABLE_TYPES = [
  ...ALLOWABLE_STRING_TYPES,
  ...ALLOWABLE_NUMBER_TYPES,
]

export const BUDIBASE_INTERNAL_DB_ID = INTERNAL_TABLE_SOURCE_ID
export const DEFAULT_BB_DATASOURCE_ID = "datasource_internal_bb_default"
export const BUDIBASE_DATASOURCE_TYPE = "budibase"
export const DB_TYPE_INTERNAL = "internal"
export const DB_TYPE_EXTERNAL = "external"

export const IntegrationTypes = {
  POSTGRES: "POSTGRES",
  MONGODB: "MONGODB",
  COUCHDB: "COUCHDB",
  S3: "S3",
  MYSQL: "MYSQL",
  REST: "REST",
  DYNAMODB: "DYNAMODB",
  ELASTICSEARCH: "ELASTICSEARCH",
  SQL_SERVER: "SQL_SERVER",
  AIRTABLE: "AIRTABLE",
  ARANGODB: "ARANGODB",
  ORACLE: "ORACLE",
  INTERNAL: "INTERNAL",
  GOOGLE_SHEETS: "GOOGLE_SHEETS",
  FIRESTORE: "FIRESTORE",
  REDIS: "REDIS",
  SNOWFLAKE: "SNOWFLAKE",
}

export const IntegrationNames = {
  [IntegrationTypes.POSTGRES]: "PostgreSQL",
  [IntegrationTypes.MONGODB]: "MongoDB",
  [IntegrationTypes.COUCHDB]: "CouchDB",
  [IntegrationTypes.S3]: "S3",
  [IntegrationTypes.MYSQL]: "MySQL",
  [IntegrationTypes.REST]: "REST",
  [IntegrationTypes.DYNAMODB]: "DynamoDB",
  [IntegrationTypes.ELASTICSEARCH]: "ElasticSearch",
  [IntegrationTypes.SQL_SERVER]: "SQL Server",
  [IntegrationTypes.AIRTABLE]: "Airtable",
  [IntegrationTypes.ARANGODB]: "ArangoDB",
  [IntegrationTypes.ORACLE]: "Oracle",
  [IntegrationTypes.INTERNAL]: "Internal",
  [IntegrationTypes.GOOGLE_SHEETS]: "Google Sheets",
  [IntegrationTypes.FIRESTORE]: "Firestore",
  [IntegrationTypes.REDIS]: "Redis",
  [IntegrationTypes.SNOWFLAKE]: "Snowflake",
}

export const SchemaTypeOptions = [
  { label: "Text", value: FieldType.STRING },
  { label: "Number", value: FieldType.NUMBER },
  { label: "Boolean", value: FieldType.BOOLEAN },
  { label: "Datetime", value: FieldType.DATETIME },
]

export const SchemaTypeOptionsExpanded = SchemaTypeOptions.map(el => ({
  ...el,
  value: { type: el.value },
}))

export const RawRestBodyTypes = {
  NONE: "none",
  FORM: "form",
  ENCODED: "encoded",
  JSON: "json",
  TEXT: "text",
  XML: "xml",
}

export const RestBodyTypes = [
  { name: "none", value: "none" },
  { name: "form-data", value: "form" },
  { name: "x-www-form-encoded", value: "encoded" },
  { name: "raw (JSON)", value: "json" },
  { name: "raw (XML)", value: "xml" },
  { name: "raw (Text)", value: "text" },
]

export const PaginationTypes = [
  { label: "Page number based", value: "page" },
  { label: "Cursor based", value: "cursor" },
]

export const PaginationLocations = [
  { label: "Query parameters", value: "query" },
  { label: "Request body", value: "body" },
]

export const BannedSearchTypes = [
  FieldType.LINK,
  FieldType.ATTACHMENT,
  FieldType.FORMULA,
  FieldType.JSON,
  "jsonarray",
  "queryarray",
]

export const DatasourceTypes = {
  RELATIONAL: "Relational",
  NON_RELATIONAL: "Non-relational",
  SPREADSHEET: "Spreadsheet",
  OBJECT_STORE: "Object store",
  GRAPH: "Graph",
  API: "API",
}

export const ROW_EXPORT_FORMATS = {
  CSV: "csv",
  JSON: "json",
  JSON_WITH_SCHEMA: "jsonWithSchema",
}
