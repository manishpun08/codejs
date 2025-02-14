'use client';

import React from 'react';
import { usePathname } from 'next/navigation'; // For getting the current pathname
import Link from 'next/link';

const Breadcrumb = ({
  homeElement = 'Home',
  separator = '/',
  containerClasses = 'flex space-x-2',
  listClasses = 'text-blue-500 hover:underline',
  activeClasses = 'font-bold text-black',
  capitalizeLinks = true,
}) => {
  const pathname = usePathname() ?? ''; // Handle null or undefined paths
  const pathNames = pathname.split('/').filter((path) => path); // Split the pathname into segments

  return (
    <div className="text-white">
      <ul className={containerClasses}>
        {/* Home Breadcrumb */}
        <li className={listClasses}>
          <Link href="/">{homeElement}</Link>
        </li>

        {/* Separator */}
        {pathNames.length > 0 && separator}

        {/* Breadcrumb Links */}
        {pathNames.map((link, index) => {
          // Build the href for each breadcrumb link
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;

          // Determine if the link should have active classes
          const itemClasses =
            pathname === href ? `${listClasses} ${activeClasses}` : listClasses;

          // Capitalize the link text if the `capitalizeLinks` prop is true
          const itemLink = capitalizeLinks
            ? link.charAt(0).toUpperCase() + link.slice(1)
            : link;

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>

              {/* Add separator between breadcrumbs */}
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
