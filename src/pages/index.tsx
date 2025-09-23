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
,"jetbrains","vscode","webstorm","intellijidea","eclipse","photoshop","illustrator","xd","figma","sketch","notion","slack","zoom","discord","spotify","youtube","netflix","amazon","google","facebook","twitter","linkedin","instagram","whatsapp","telegram","snapchat","pinterest","twitch","stackoverflow","medium","wordpress","wix","shopify","stripe","paypal","square","wepay","alibaba","baiducloud","tencentcloud","aliyun","samsung","huawei","xiaomi","oppo","vivo","oneplus","dji","tesla","nvidia","intel","amd","qualcomm","arm","sony","lg","htc","blackberry","motorola","nokia","lenovo","asus","acer","msi","razer","logitech","corsair","hyperx","razer","dell","hp","lenovo","xiaomi","huawei","oneplus","oppo","vivo","samsung","asus","acer","msi","razer","logitech","corsair","hyperx","nvidia","intel","amd","qualcomm","arm","figshare","researchgate","academia","mendeley","zotero","endnote","overleaf","latex","matlab","wolfram","maple","stata","spss","sas","rstats","jupyter","anaconda","tensorflow","pytorch","scikitlearn","keras","opencv","nltk","spacy","gensim","hadoop","spark","kafka","flink","cassandra","hbase","zookeeper","jenkins","travisci","circleci","githubactions","gitlabci","bitbucketpipelines","jira","confluence","trello","asana","mondaydotcom","clickup","notion","slack","microsoftteams","zoom","googlemeet","webex","gotomeeting","bluejeans","joinme","teamviewer","anydesk","splashtop","logmein","chrome","firefox","safari","edge","opera","brave","vivaldi","torbrowser","duckduckgo","ghostery","lastpass","1password","dashlane","bitwarden","nordvpn","expressvpn","cyberghost","surfshark","protonvpn","windscribe","tunnelbear","hotspotshield","avast","avg","kaspersky","norton","mcafee","bitdefender","malwarebytes","spybot","ccleaner","glaryutilities","revoUninstaller","teamviewer","anydesk","splashtop","logmein"
    ]}></IconCloud>
      </main>
    </Layout>
  );
}
