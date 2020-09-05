import os, random
import discord as d
from dotenv import load_dotenv

from discord.ext import commands


load_dotenv()
TOKEN = os.getenv('DISCORD_TOKEN')

bot = commands.Bot(command_prefix="!")


# Create a channel
@bot.command(name="create", help="Create a channel")
@commands.has_role('admin')
async def create_channel(ctx, channel_name):
    mbed = d.Embed(
        title = 'Channel Creation',
        description = f'Channel \"{channel_name}\" has been brought to life.'
    )

    guild = ctx.guild
    existing_channel = d.utils.get(guild.channels, name=channel_name)
    if not existing_channel:        
        await ctx.send(embed=mbed)
        await guild.create_text_channel(channel_name)


# Delete a channel
@bot.command(name="delete", help="Delete a channel")
@commands.has_role('admin')
async def delete_channel(ctx, channel_name: d.TextChannel):   
    # an embeded text with title and content (stands out)
    mbed = d.Embed(
        title = 'Channel Removal',
        description = f'Channel \"{channel_name}\" has been vaporized.'
    )

    guild = ctx.guild
    if channel_name in guild.channels:
        await ctx.send(embed=mbed)
        await channel_name.delete()


# Add class to current user
@bot.command(name="add", help="Add a class")
async def add_class(ctx, *info):
    # *info combines all arguments into a tuple, useful when arg number is unknown
    # add_class(one, two, three) --> add_class(*info)
    # print(*info) = print( "(one, two, three)" )
    
    iterString = " ".join(info) # join tuple with " " to create string 
    
    # check if information is correctly formatted, reject if missing <>
    if iterString[0] != "<" or iterString[-1] != ">":
        await ctx.send(
            "Please enter in the following format with brackets.\n"
            "`!add <section, professor, time>`"
        )
    else:
        combinedList = iterString[1:-1].split(",")
        section, prof, time = combinedList
        await ctx.send(
            f"Class: {section.upper()}\n"
            f"Professor: {prof.title()}\n"
            f"Meeting time: {time.upper()}"
        )


# Show Kush and Talon's names
@bot.command(name="creator", help="Create a silly computer")
async def print_computer(ctx):
    await ctx.send(
        f"`                               .----.                     \n"
        f"                   .---------. | == |                     \n"
        f"                   |.-\"\"\"\"\"-.| |----|                     \n"
        f"                   ||       || | == |                     \n"
        f"                   ||       || |----|                     \n"
        f"                   |'-.....-'| |::::|                     \n"
        f"                   '\"\")---(\"\"' |___.|                     \n"
        f"                  /:::::::::::\\\" _  \"                     \n"
        f"                 /:::=======:::\\'\\'\                      \n"
        f"                '\"\"\"\"\"\"\"\"\"\"\"\"\"\"\"' '-'                     \n"
        f" _   __          _                _____     _             \n"
        f"| | / /         | |       ___    |_   _|   | |            \n"
        f"| |/ / _   _ ___| |__    ( _ )     | | __ _| | ___  _ __  \n"
        f"|    \| | | / __|  _ \   / _ \/\   | |/ _' | |/ _ \| '_ \ \n"
        f"| |\  \ |_| \__ \ | | | | (_>  <   | | (_| | | (_) | | | |\n"
        f"\_| \_/\__,_|___/_| |_|  \___/\/   \_/\__,_|_|\___/|_| |_|`"
        )


# Permission error
@bot.event
async def on_command_error(ctx, error):
    # if permission failed (owner, admin, mod, etc), raise error
    if isinstance(error, commands.errors.CheckFailure):
        await ctx.send(f"Your role is insufficient. Invalid permission.")

@bot.event
async def on_ready():
    print(f'{bot.user.name} has connected to Discord')

bot.run(TOKEN)