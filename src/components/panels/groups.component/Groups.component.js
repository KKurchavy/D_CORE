import React from 'react';


import GroupsList from './groups.list.component/groups.list.component';
import Group from './single.group.component/single.group.component';


export default function Groups() {
  return (
    <div>
        <GroupsList />
        <Group />
    </div>
  );
}

