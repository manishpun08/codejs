'use client';
import React, { Suspense, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material';
// import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { formUrlQuery, removeKeysFormQuery } from '@/lib/url';

// interface Props {
//   route: string;
// }

const SearchBar = () => {
  // const router = useRouter();
  // const pathname = usePathname();

  // const searchParams = useSearchParams();
  // const query = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     if (searchQuery) {
  //       const newUrl = formUrlQuery({
  //         params: searchParams.toString(),
  //         key: 'query',
  //         value: searchQuery,
  //       });
  //       router.push(newUrl, { scroll: false });
  //     } else {
  //       if (pathname === route) {
  //         const newUrl = removeKeysFormQuery({
  //           params: searchParams.toString(),
  //           keysToRemove: ['query'],
  //         });
  //         router.push(newUrl, { scroll: false });
  //       }
  //     }
  //   }, 500);

  //   return () => clearTimeout(delayDebounceFn);
  // }, [searchQuery, router, route, searchParams, pathname]);
  return (
    <div>
      <Suspense>
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Search Courses..."
            className="bg-white rounded-2xl lg:w-[500px] h-16"
          />
        </FormControl>
      </Suspense>
    </div>
  );
};

export default SearchBar;
