import { Box } from "@mui/system"
import { NavBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWidth={drawerWidth} />

      {/* SideBar drawerWidth */}

      <Box
        component='main'
        sx={{ flexGrowing: 1, p: 3 }}
      >
        {children}
      </Box>
    </Box>
  )
}