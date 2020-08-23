# get current shell name by querying shell variables or looking at parent
# process name
if [ -n "${BASH:-}" ]; then
   shell=${BASH##*/}
elif [ -n "${ZSH_NAME:-}" ]; then
   shell=$ZSH_NAME
else
   shell=$(/usr/bin/basename $(/usr/bin/ps -p $$ -ocomm=))
fi

if [ -f /usr/share/Modules/init/$shell ]; then
   . /usr/share/Modules/init/$shell
else
   . /usr/share/Modules/init/sh
fi
