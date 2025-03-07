const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMessageReactions
	], 
});

const commands = [
	{
		name: "ping",
		description: "Ping Pong"
	}
];

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, async readyClient => {
	await client.application.commands.set(commands); //set commands
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("interactionCreate", async (interaction)=>{
	if(interaction.commandName == "ping"){
		await ping(interaction);
	};
});

async function ping(interaction) {
	await interaction.reply({
		content: "pong"
	})
}

async function rp_add() {
	
};

async function rp_create() {
	
};

async function rp_delete() {

};

async function rp_autoremove() {

};

async function rp_copy() {

};

async function rp_debug() {

};

async function rp_edit() {

};

async function rp_refresh() {

};

async function rp_remove() {

};

async function rp_select() {

};

async function selected() {
	
};

// Log in to Discord with your client's token
client.login(token);

