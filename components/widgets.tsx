import { TwitterTimelineEmbed } from "react-twitter-embed";

import SearchForm from "@/components/search-form";

const Widgets = () => (
  <aside className="col-span-3 hidden xl:block mt-4">
    <SearchForm />

    <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 1000, width: "100%" }} />
  </aside>
);

export default Widgets;
