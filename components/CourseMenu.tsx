import * as React from 'react';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import { coursesList } from '@/constants/general.constant';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const CourseMenu: React.FC = () => {
  const router = useRouter();

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
            onClick={handleHoverClose}
          >
            <div className="py-2 capitalize">{course.name}</div>
          </MenuItem>
        ))}
        <div className="flex justify-center my-2">
          <Button
            onClick={() => {
              router.push('/courses');
              handleHoverClose();
            }}
            className="w-full py-2 md:py-3 md:px-5 md:w-auto rounded-xl bg-primary-600 hover:bg-primary-500 hover:drop-shadow-md transition duration-300 ease-in-out text-white"
          >
            All Course <FaArrowRightLong className="text-lg ml-2 mb-[2px]" />
          </Button>
        </div>
      </Menu>
    </div>
  );
};

export default CourseMenu;
