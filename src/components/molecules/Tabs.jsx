import { Tabs as MuiTabs, Tab } from '@mui/material';
import useAppState from '@/hooks/useAppState';
import { POLYGON, MARKER } from '@/constants';

const Tabs = () => {
  const { selectedTab, setSelectedTab } = useAppState();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <MuiTabs
      value={selectedTab}
      onChange={handleTabChange}
      aria-label="management tabs"
    >
      <Tab
        label="Polygons management"
        value={POLYGON}
        sx={{
          typography: 'headingXXS',
        }}
      />
      <Tab
        label="Markers management"
        value={MARKER}
        sx={{
          typography: 'headingXXS',
        }}
      />
    </MuiTabs>
  );
};

export default Tabs;
