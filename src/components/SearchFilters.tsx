import React, { Fragment, useState, useEffect } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter, NextRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '@/services/filter.services';
import { IFilterDataItem, IFilterItem, IFilterValues } from '@/interfaces/filter';

const SearchFilters = () => {
    const [filters, setFilters] = useState<IFilterDataItem[]>(filterData);
    const router: NextRouter = useRouter();

    const searchProperties = (filterValues: IFilterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            query[item.name] = item.value
        })

        router.push({ pathname: path, query: query });
    };
    return (
        <Fragment>
            <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
                {filters.map((filter: IFilterDataItem) => (
                    <Box key={filter.queryName}>
                        <Select
                            w='fit-content'
                            p='2'
                            placeholder={filter.placeholder}
                            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => searchProperties({
                                [filter.queryName]: event.target.value,
                            })}
                        >
                            {filter.items.map((item: IFilterItem) => (
                                <option key={item.value} value={item.value}>{item.name}</option>
                            ))}
                        </Select>
                    </Box>
                ))}
            </Flex>
        </Fragment>
    )
}

export default SearchFilters