# Kill Process on Port 3002 (PowerShell)

Use this command to find and kill any process using port **3002**:-  

```powershell
Get-NetTCPConnection -LocalPort 3002 |
Select-Object -ExpandProperty OwningProcess |
ForEach-Object { Stop-Process -Id $_ -Force }
