import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import './index.scss';

export const IconWithTooltip = ({ tooltipContent, children }) => {
  return (
    <Tooltip placement="top" arrow title={tooltipContent}>
      <IconButton className="icon-btn-with-tooltip">{children}</IconButton>
    </Tooltip>
  );
};
