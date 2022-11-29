import {
  BellIcon,
  HashtagIcon,
  HomeIcon,
  BookmarkIcon,
  EnvelopeIcon,
  ListBulletIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

import SidebarRow from "./sidebar-row";

const Sidebar = () => (
  <nav className="flex flex-col col-span-2 items-center md:items-start">
    <svg width="48" height="48" viewBox="0 0 32 32" aria-hidden="true" className="w-8 h-8 mb-8 md:ml-3">
      <path
        fill="#1da1f2"
        d="M31.939 6.092c-1.18 0.519-2.44 0.872-3.767 1.033 1.352-0.815 2.392-2.099 2.884-3.631-1.268 0.74-2.673 1.279-4.169 1.579-1.195-1.279-2.897-2.079-4.788-2.079-3.623 0-6.56 2.937-6.56 6.556 0 0.52 0.060 1.020 0.169 1.499-5.453-0.257-10.287-2.876-13.521-6.835-0.569 0.963-0.888 2.081-0.888 3.3 0 2.28 1.16 4.284 2.917 5.461-1.076-0.035-2.088-0.331-2.971-0.821v0.081c0 3.18 2.257 5.832 5.261 6.436-0.551 0.148-1.132 0.228-1.728 0.228-0.419 0-0.82-0.040-1.221-0.115 0.841 2.604 3.26 4.503 6.139 4.556-2.24 1.759-5.079 2.807-8.136 2.807-0.52 0-1.039-0.031-1.56-0.089 2.919 1.859 6.357 2.945 10.076 2.945 12.072 0 18.665-9.995 18.665-18.648 0-0.279 0-0.56-0.020-0.84 1.281-0.919 2.4-2.080 3.28-3.397z"
      />
    </svg>

    <SidebarRow Icon={HomeIcon} title="Home" />
    <SidebarRow Icon={HashtagIcon} title="Explore" />
    <SidebarRow Icon={BellIcon} title="Notifications" />
    <SidebarRow Icon={EnvelopeIcon} title="Messages" />
    <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
    <SidebarRow Icon={ListBulletIcon} title="Lists" />
    <SidebarRow Icon={UserIcon} title="Sign In" />
    <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
  </nav>
);

export default Sidebar;
