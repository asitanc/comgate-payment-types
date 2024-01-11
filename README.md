# comgate-types

The types were created based on documentation available [here](https://apidoc.comgate.cz/?lang=cs#tag_api_title-tag_api_payment_methods).

## Disclaimer
This library is an **unofficial** and it is not endorsed by or affiliated with Comgate.

## Project Structure

### Types (`/src/types`)
In the `src/types` directory, you will find TypeScript types corresponding to the Comgate API. These types are rewritten based on the official Comgate documentation. Each file includes the date of creation or last update, along with a link to the relevant section of the Comgate documentation.

Example:

```typescript
src/types/
  create.ts 
  cancel.ts 
```

## Installation

To install this package, use npm and add it as a development dependency to your project. Run the following command in your project directory:

```bash
npm i -D comgate-types
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.