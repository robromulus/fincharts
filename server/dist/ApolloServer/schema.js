import { gql } from "apollo-server-express"; //will create a schema
const Schema = gql `
	type Person {
		id: ID!
		name: String
	}
	#handle user commands
	type Query {
		getAllPeople: [Person] #will return multiple Person instances
		getPerson(id: Int): Person
	}
`;
export default Schema;
