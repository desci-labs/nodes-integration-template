import { createDraftNode, publishDraftNode, setApiKey, updateCoverImage, uploadFiles } from "@desci-labs/nodes-lib";
import { signerFromPkey } from "@desci-labs/nodes-lib/dist/util/signing.js";

const main = async () => {
  setApiKey(process.env.API_KEY)
  const { node: { uuid }}= await createDraftNode({
    title: "Trial node",
    defaultLicense: "CC-BY-4.0",
    researchFields: [
      "Computer Science"
    ],
  });

  await uploadFiles({
      uuid,
      contextPath: "/",
      files: [ "package.json" ],
  });

  await updateCoverImage(
    uuid,
    "bafkreidivzimqfqtoqxkrpge6bjyhlvxqs3rhe73owtmdulaxr5do5in7u" // a nice cat
  );

  const signer = signerFromPkey(process.env.PKEY)
  await publishDraftNode(uuid, signer);
};

main();
