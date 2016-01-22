﻿/*global define */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/** @license
 | Copyright 2013 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
    root: {
        buttons: {
            okButtonText: "OK", // Command button in Splash Screen to enter into the main screen of the application.
            email: "Email", // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip.
            facebook: "Facebook", // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
            twitter: "Twitter", // Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
            embedding: "Embedded URL" // Shown when hovering the mouse pointer over  ‘Embedding’ icon for sharing the current map extents via a link.
        },
        tooltips: {
            search: "Search", // Shown as a tooltip for the search icon when search from the address.
            reports: "Site Selector", // Shown as a tooltip for the search icon.
            locate: "Locate", // Shown as a tooltip for Geolocation icon in appHeader.
            share: "Share", // Shown as a tooltip for Share icon in appHeader to open the options available to share the application.
            help: "Help", // Shown as a tooltip for Help icon in appHeader to view the help file.
            clearEntry: "Clear", // Shown as a tooltip for Clear text, icon in unified search textbox to clear the text entered in the unified search text box.
            previous: "Previous", // Shown as a tooltip for Previous feature icon in infoWindow pod.
            next: "Next", // Shown as a tooltip for Next feature icon in infoWindow pod.
            applyFilter: "Apply Filter", // Shown as a tooltip for apply filter icon.
            clearFilter: "Clear Filter" //  Shown as a tooltip for clear filter icon.
        },
        titles: {
            searchBuildingText: "Address or Parcel Number", // Shown as a label for search buildings near an address.
            sliderDisplayText: "Show results within ", // Shown as a label for slider use for display the result in buffer area.
            communityText: "Search communities by city, county or region", // Shown as a label for Search communities in communities tab.
            searchCommunityText: "Search communities in", // Shown as a label for slider use for display the result in buffer area in communities tab.
            searchBusinessText: "Search business near an address", //Shown as a label for search business near an address.
            searchSiteText: "Search sites near an address", // Shown as a label for search sites near an address
            countStatus: "of", // Shown as a label for pagination in building and sites tab.
            webpageDisplayText: "Copy/Paste HTML into your web page", // Shown as a title when Embedding link share option is clicked/tapped.
            textDownload: "Download", // Shown as a label for Download option in building, sites, communities, Business tab.
            result: "Back To Result", // Shown as a label for display the main tab when attachment panel is opened in building and sites tab.
            sortBy: " Sort by", // Shown as a label for display the main tab when attachment panel is opened in building and sites tab.
            select: "Select", // Shown as a label from selecting  from sorting data.
            toText: "to", //Shown as a label indicating the maximum range value in filter Data.
            fromText: "from", //Shown as a label indicating the minimum range value in filter Data.
            filterText: "Filters", //Shown as a label for filter the data.
            attchementText: "Attachments" //Shown as a label for Attachments.
        },
        errorMessages: {
            invalidSearch: "No results found", // Shown when no results are found in unified search.
            downloadError: "Unable to complete operation", // Shown when the data is not download.
            geometryIntersectError: "The searched area is outside the area of interest and will not be analyzed.", // Shown when the searched area is outside the area of interest.
            falseConfigParams: "Required configuration key values are either null or not exactly matching with layer attributes. This message may appear multiple times", // Shown when Required configuration key values are either null or not exactly matching with layer attributes.
            invalidLocation: "Current location not found", // Shown when current Location not found.
            invalidProjection: "Unable to plot current location on the map", // Unable to plot current location on the map.
            widgetNotLoaded: "Unable to load widgets.", // Fail to load widgets.
            noBasemap: "No Basemap Found", // Shown when no basemap found in webmap.
            disableTab: "Enable at least one tab", // Shown when all tab is disable from config.
            bufferSliderValue: "Buffer slider should not be set to zero distance", // Shown when Buffer slider is set to zero distance.
            invalidInput: "Please provide valid input for range filters", // Shown when enter the invalid input.
            unableToSort: "Unable to sort", //Shown when the layer does not support the sorting feature.
            portalUrlNotFound: "Portal URL cannot be empty" //Portal URL cannot be empty.
        }
    },
    es: true,
    fr: true,
    it: true
});
