import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { coursesList } from '@/constants/general.constant';

const CourseMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleHoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      onMouseEnter={handleHoverOpen}
      onMouseLeave={handleHoverClose}
      style={{ display: 'inline-block' }}
    >
      <Button
        id="course-button"
        aria-controls={open ? 'course-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        startIcon={<MenuIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        className="w-[180px] py-3 lg:py-4 lg:px-5 lg:w-auto rounded-xl bg-primary-600 "
      >
        All Course
      </Button>
      <Menu
        id="course-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleHoverClose}
        MenuListProps={{
          'aria-labelledby': 'course-button',
          onMouseLeave: handleHoverClose, // Close menu when mouse leaves the menu
        }}
      >
        {coursesList.map((course) => (
          <MenuItem
            key={course.id}
            component="a"
            href={course.link}
            className="w-[230px] hover:bg-primary-300 hover:text-white transition-all duration-300 ease-in-out"
          >
            <div className=" py-2 capitalize ">{course.name}</div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CourseMenu;
