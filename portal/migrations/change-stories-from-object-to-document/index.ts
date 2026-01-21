// migrations/convert-inline-pets-to-references.ts
// npm install lodash
import {at, createIfNotExists, defineMigration, replace, patch} from 'sanity/migrate'

function getPetId(pet: {name: string}) {
    return `pet-${pet.name.toLowerCase()}`
}

export default defineMigration({
    title: "Convert an inline object in an array into a document and reference to it",
    documentTypes: ["human"],
    filter: "defined(pets) && count(pets[]._ref) > 0",
    migrate: {
        document(human) {
            const currentPets = human.pets;
            if (Array.isArray(currentPets) && currentPets.length > 0) {
                return (
                    currentPets
                        // skip items already converted to references
                        .filter((pet) => !pet._ref)
                        .flatMap((pet) => {
                            const petId = getPetId(pet);
                            const { _key, ...petAttributes } = pet;

                            return [
                                // create the new document if it doesn’t exist
                                createIfNotExists({
                                    _id: petId,
                                    _type: "pet",
                                    ...petAttributes,
                                }),
                                // replace the inline object (matched by _key) with a reference
                                patch(
                                    human._id,
                                    at(
                                        ["pets"],
                                        replace(
                                            [
                                                {
                                                    _type: "reference",
                                                    _ref: petId,
                                                },
                                            ],
                                            { _key },
                                        ),
                                    ),
                                ),
                            ];
                        })
                );
            }
        },
    },
});
