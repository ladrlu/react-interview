import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface SideBarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

export const SideBar = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}: SideBarProps) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="navigation"
    >
      <Drawer
        variant={isMd ? "permanent" : "temporary"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: theme.palette.grey[800],
            color: theme.palette.grey[50],
          },
        }}
      >
        <Box px={2} py={3} sx={{ textAlign: "center" }}>
          <Image src="logo.svg" alt="Alveno" width="150" height="37" />
        </Box>

        <Divider sx={{ backgroundColor: theme.palette.grey[100] }} />
        <List>
          <ListItemButton component={Link} href="/">
            <ListItemText primary="Zadání" />
          </ListItemButton>
          <ListItemButton component={Link} href="/teams">
            <ListItemText primary="Týmy" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};
