import React, { useState } from "react";
import { Input, Card, Dropdown, Menu } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Image from "next/image";
import { url } from "inspector";

interface Podcast {
    name: string;
    episodes: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    date: string;
    embedUrl: string;
}

const PodcastSearchBar = ({ podcasts }: { podcasts: Podcast[] }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);
    const router = useRouter();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query) {
            const filteredResults = podcasts.filter((podcast) =>
                podcast.name.toLowerCase().includes(query) ||
                podcast.category.toLowerCase().includes(query) ||
                podcast.tags.some((tag) => tag.toLowerCase().includes(query))
            );
            setFilteredPodcasts(filteredResults);
        } else {
            setFilteredPodcasts([]);
        }
    };

    const handleResultClick = (podcast) => {
        router.push(`/resources/PodcastSearch?name=${encodeURIComponent(podcast)}`);
    };

    const menu = (
        <Menu style={{ width: 300, maxHeight: '400px', overflowY: 'auto' }}>
            {filteredPodcasts.map((podcast, index) => (
                <Menu.Item style={{ width: '100%' }} key={index} onClick={() => handleResultClick(podcast.name)}>
                    <div
                        style={{
                            height: 100,
                            marginBottom: "10px",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                            width:'100%'
                        }}
                    >
                        <span
                            style={{
                                width:80,
                                height:80,
                                backgroundImage: `url(${podcast.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: "50%",
                                marginRight: "10px",
                            }}
                        ></span>
                        <span style={{ width:'60%', fontWeight: "bold", fontSize: ".7rem" }}>
                            {podcast.name}
                        </span>
                    </div>

                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div style={{ position: 'absolute', padding: '1%', right: 20 }}>
            <Dropdown 
                overlay={menu} 
                visible={!!searchQuery && filteredPodcasts.length > 0} 
                trigger={['click']} 
                placement="bottomRight" 
            >
                <Input
                    placeholder="Search podcasts..."
                    prefix={<SearchOutlined />}
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{ width: 300 }}
                />
            </Dropdown> 
        </div>
    );
};

export default PodcastSearchBar;