import React from 'react';
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import { Delete } from 'admin-on-rest'
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import { OrderList } from './orders';
import authClient from './authClient';

const App = () => (
    <Admin title="BizTriangle" restClient={jsonServerRestClient('http://localhost:9081/api')}>
        <Resource name="users" list={UserList} />
    </Admin>
);

export default App;
