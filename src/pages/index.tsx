import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import IconCloud from '@site/src/components/IconCloud';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
     
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎 来到 ${siteConfig.title}`}
      description="欢迎来到闲鱼小铺">
      {/* <HomepageHeader /> */}
       <h1 style={{textAlign: 'center',marginTop: 40}}>    欢迎👏🏻来到闲鱼小铺</h1>
    
      <main>
    <IconCloud iconSlugs={['react', 'typescript', 'docusaurus',"kuaishou","tiktok","github","wechat","xiaohongshu","goland","php","mysql","go","javascript","hugo","vite","vitepress","hexo"
,"taobao","alipay","jd","youzan","eleme","meituan","baidu","sougou","microsoft","apple","android","linux","docker","kubernetes","nginx","redis","mongodb","graphql","prisma","vercel","netlify","cloudflare","aws","digitalocean","heroku"
    ]}></IconCloud>
      </main>
    </Layout>
  );
}
