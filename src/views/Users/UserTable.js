import React, { Fragment } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Dropdown from '../../components/Dropdown';
import { UserStatusDropdownOptions } from '../../Constants';

export const UserTable = props => {
	const columns = [
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Email',
			accessor: 'email'
		},
		{
			id: 'id',
			Header: 'Status',
			accessor: 'status',
			Cell: col => (
				<Dropdown
					onSelect={selectedStatus => {
						props.onUpdateStatus(col.row._original.id, selectedStatus);
					}}
					selectedValues={col.value}
					option={UserStatusDropdownOptions}
				/>
			)
		}
	];

	return (
		<Fragment>
			<ReactTable
				data={props.tableData}
				columns={columns}
				pageSizeOptions={[10, 20, 25, 50, 100]}
				defaultPageSize={10}
			/>
		</Fragment>
	);
};
