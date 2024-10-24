import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TablePagination,
    TableRow,
    TableSortDirection,
    useSortableTableHeader,
} from '@fremtind/jkl-table-react';
import { Props } from 'payload/dist/admin/components/views/collections/List/types';
import React, { useRef, useState } from 'react';

const columns = ['Score', 'Kommentar', 'Side', 'Tidspunkt'];

export const FeedbackList: React.FC<Props> = (props) => {
    const ref = useRef<HTMLTableElement>(null);

    const [sortBy, setSortBy] = useState('Tidspunkt');
    const [direction, setDirection] = useState<TableSortDirection>('desc');

    const rows =
        props.data.docs
            ?.map((feedback) => {
                const time = new Date(feedback.createdAt);

                const dateString = [
                    time.getFullYear(),
                    (time.getMonth() + 1).toString().padStart(2, '0'),
                    time.getDate().toString().padStart(2, '0'),
                ].join('.');

                return [
                    feedback.feedbackValue,
                    feedback.message,
                    feedback.page,
                    dateString,
                ];
            })
            .sort((a, b) => {
                const sorta = a[columns.indexOf(sortBy)];
                const sortb = b[columns.indexOf(sortBy)];

                if (sorta === sortb) {
                    return 0;
                }
                if (sorta > sortb) {
                    if (direction === 'desc') {
                        return -1;
                    } else {
                        return 1;
                    }
                } else {
                    if (direction === 'desc') {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }) || [];

    const [activePage, setActivePage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const startIndex = activePage * rowsPerPage;

    const visibleRows = rows.slice(startIndex, startIndex + rowsPerPage);

    const handleSortChange = (
        sortKey: string,
        sortDirection: TableSortDirection
    ) => {
        setSortBy(sortKey);
        setDirection(sortDirection);
    };

    const { getSortProps } = useSortableTableHeader(
        sortBy,
        direction,
        handleSortChange
    );

    return (
        <div
            className={'jkl'}
            style={{
                margin: 50,
                width: 'calc(100% - 100px)',
            }}
        >
            <Table ref={ref} fullWidth>
                <TableCaption srOnly>
                    Oversikt over feedback fra sluttbrukere
                </TableCaption>
                <TableHead>
                    <TableRow>
                        {columns.map((header, index) => (
                            <TableHeader
                                key={index}
                                bold
                                {...getSortProps(header)}
                            >
                                {header}
                            </TableHeader>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {visibleRows.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <TableCell
                                    key={cellIndex}
                                    data-th={columns[cellIndex]}
                                >
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>
                            <TablePagination
                                activePage={activePage}
                                totalNumberOfRows={rows.length}
                                rowsPerPage={rowsPerPage}
                                rowsPerPageItems={[
                                    10,
                                    25,
                                    50,
                                    100,
                                    150,
                                    { label: 'Alle', value: -1 },
                                ]}
                                onChangeRowsPerPage={(e) => {
                                    const newRowsPerPage = Number.parseInt(
                                        e.target.value
                                    );
                                    setRowsPerPage(newRowsPerPage);
                                    setActivePage(0);
                                    if (ref.current) {
                                        ref.current.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }
                                }}
                                onChange={(_, toPage) => {
                                    setActivePage(toPage);
                                    if (ref.current) {
                                        ref.current.scrollIntoView({
                                            behavior: 'smooth',
                                        });
                                    }
                                }}
                            />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};
