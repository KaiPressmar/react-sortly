import Simple from './pages/examples/Simple';
import Advanced from './pages/examples/Advanced/Advanced';
import TableSortable from './pages/examples/TableSortable/TableSortable';
import HorizontalList from './pages/examples/HorizontalList/HorizontalList';
import StressTest from './pages/examples/StressTest';
import FileTree from './pages/examples/FileTree/FileTree';
import MultipleTree from './pages/examples/MultipleTree';
import RevertOnDragOutside from './pages/examples/RevertOnDragOutside/RevertOnDragOutside';

export default [
  {
    id: 'examples',
    label: 'Examples',
    children: [
      { id: 'simple', label: 'Simple', component: Simple },
      { id: 'advanced', label: 'Advanced', component: Advanced },
      { id: 'table-sortable-row', label: 'Table Sortable Row', component: TableSortable },
      { id: 'horizontal-list', label: 'Horizontal List', component: HorizontalList },
      { id: 'file-tree', label: 'File Tree', component: FileTree },
      { id: 'multiple-tree', label: 'Multiple Tree', component: MultipleTree },
      { id: 'revert-on-drag-outside', label: 'Revert On Drag Outside', component: RevertOnDragOutside },
      { id: 'stress-test', label: 'Stress Test', component: StressTest },
    ]
  }
];
