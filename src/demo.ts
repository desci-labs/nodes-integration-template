// Set env variables from .env (see README)
import "dotenv/config";
import { createDraftNode, updateCoverImage, uploadFiles } from "@desci-labs/nodes-lib";

const main = async () => {
  const { node: { uuid }}= await createDraftNode({
    title: "Trial node",
    defaultLicense: "CC-BY-4.0",
    researchFields: [
      "Computer Science"
    ],
  });

  await uploadFiles({
      uuid,
      targetPath: "/",
      localFilePaths: [ "package.json" ],
  });

  await updateCoverImage(
    uuid,
    "bafkreidivzimqfqtoqxkrpge6bjyhlvxqs3rhe73owtmdulaxr5do5in7u" // a nice cat
  );
};

main();
