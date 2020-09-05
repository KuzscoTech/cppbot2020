import os, random
import discord
from dotenv import load_dotenv

from discord.ext import commands

load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

bot = commands.Bot(command_prefix="!")

@bot.command(name="create_channel", help="Testing commands")
@commands.has_role('admin')
async def create_channel(ctx, channel_name):
    guild = ctx.guild
    existing_channel = discord.utils.get(guild.channels, name=channel_name)
    if not existing_channel:
        await guild.create_text_channel(channel_name)
        await ctx.send(f'Channel \'{channel_name}\' is created.')
    else:
        await ctx.send(f'Channel alrEADY EXIST, sTewpiD...')

@bot.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.errors.CheckFailure):
        await ctx.send(f'You have no power here. '
                        'Check your role bruh, also..\n'
                        "@Admin these heaux tryin summ\'")

async def send_nudes(ctx, number: int): # ctx=self, Convert parameter type (:)
    # ex) !send_noods 3
    response = f"Alright, I'll send {number} pics if you deposit ${number*20}.00 into my CashApp."
    await ctx.send(response)


@bot.event
async def on_ready():
    print(f'{bot.user.name} has connected to Discord')

bot.run(TOKEN)