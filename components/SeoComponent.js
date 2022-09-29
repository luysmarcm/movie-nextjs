import Head from "next/head";

const SeoComponent = ({ title, description, image }) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
		<meta property="og:type" content="website" />
		<meta name="og:title" property="og:title" content={title} />
		<meta
			name="og:description"
			property="og:description"
			content={description}
		/>
		<meta property="og:site_name" content="Canguro Venezuela" />
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta property="og:image" content={`${image}`} />
	</Head>
)

export default SeoComponent;
