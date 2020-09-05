import os, random
import discord
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')
GUILD = os.getenv('DISCORD_GUILD')

client = discord.Client()

@client.event
async def on_ready():
    # select guild from list of authorized server with Client
    guild = discord.utils.get(client.guilds, name=GUILD)

    # current guild (discord_playground)
    print(
        f'{client.user} is connected to the following guild:\n'
        f'{guild.name}(id: {guild.id})'
    )

    # print list of server's members
    members = '\n - '.join([member.name for member in guild.members])
    print(f'Guild Members:\n - {members}')

@client.event
async def on_member_join(member):
    await member.create_dm() # create a direct message channel
    await member.dm_channel.send(
        f'Hi {member.name}, please, for the love of God, fuckin leave...'
    )

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    electricity = ["Miss me with that gay shit,\n"
                    "fuck outta here, fuck you mean, fuckboy.",
                    "Boohoo, buy a bandage.",
                    "I can't feel my legs either.",
                    "Break up with your girlfriend, bro.",
                    ["Gratatata, I'm in the hood", "Gratata"]]

    # key = message.content.split(" ")
    if "help" in message.content:
            response = random.choice(electricity)
            await message.channel.send(response)


client.run(TOKEN) # run








''' Overriding on_ready()
class CustomClient(discord.Client):
    async def on_ready(self):
        print(f'{self.user} has connected to Discord!')


client = CustomClient()
'''