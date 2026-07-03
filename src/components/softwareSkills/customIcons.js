// All five Palantir icons are now real .svg files in src/assets/images,
// so all five can be true inline SVG (no <img>, no "Open Image" menu,
// scales perfectly, behaves exactly like the Iconify icons).

import { ReactComponent as OntologyIcon } from "../../assets/images/Ontology.svg";
import { ReactComponent as FoundryIcon } from "../../assets/images/image.svg";
import { ReactComponent as AIPIcon } from "../../assets/images/AIP.svg";
import { ReactComponent as DataPipelinesIcon } from "../../assets/images/data-pipeline.svg";
import { ReactComponent as CodeRepositoriesIcon } from "../../assets/images/folder.svg";

export const customIcons = {
  Ontology: OntologyIcon,
  Foundry: FoundryIcon,
  AIP: AIPIcon,
  DataPipelines: DataPipelinesIcon,
  CodeRepositories: CodeRepositoriesIcon,
};
