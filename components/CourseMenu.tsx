import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { coursesList } from '@/constants/general.constant';

const CourseMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleHoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseEnter={handleHoverOpen} onMouseLeave={handleHoverClose}>
      <Button
        id="course-button"
        aria-controls={open ? 'course-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        startIcon={<MenuIcon />}
        endIcon={<KeyboardArrowDownIcon />}
        className=" py-3 lg:py-4 lg:px-2  lg:w-auto bg-secondary-700 items-center align-middle text-white"
      >
        Courses
      </Button>
      <Menu
        id="course-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleHoverClose}
        MenuListProps={{
          'aria-labelledby': 'course-button',
          onMouseLeave: handleHoverClose,
        }}
      >
        {coursesList.map((course) => (
          <MenuItem
            key={course.id}
            component="a"
            href={course.link}
            className="w-[230px] hover:bg-primary-300 hover:text-white transition-all duration-300 ease-in-out"
          >
            <div className="py-2 capitalize">{course.name}</div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CourseMenu;
