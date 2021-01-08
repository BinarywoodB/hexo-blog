---
title: Delete Useless AAD App
date: 2021-01-08 16:22:26
tags:
- AAD
- Azure
- PowerShell
categories:
- Toolkit
---

# Delete Useless AAD App With PowerShell Script

A powershell script used to delete useless AAD app under your account.

## Prerequsite

* [Azure-cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
* Platform: Windows


## Usage

1. Create a `deleteAADAapp.ps1` file.

    ```powershell
    az ad app list --filter "startswith(displayName, 'dilin')" --query '[].appId' > rawAppIds.log

    (Get-Content rawAppIds.log | Where-Object { $_ -ne '[' -and $_ -ne ']' -and $_ }) -split '\n' | ForEach-Object -Process {
        $id = $_.Trim() -replace ',','' -replace  "``n","";
        $deleteAppCommand = 'az ad app delete --id ' + $id;
        Write-Output "Executing delete command: $deleteAppCommand";
        Invoke-Expression $deleteAppCommand
    }
    ```

1. Change the filter expression in `deleteAADAapp.ps1` to suit your need. [REF: [OData filter](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part2-url-conventions.html#_Toc31361038) / [az ad app list](https://docs.microsoft.com/en-us/cli/azure/ad/app?view=azure-cli-latest#az_ad_app_list)]

1. In powershell terminal, execute the below command:

    ```powershell
    # login account you would like to delete useless AAD app
    az logout && az login
    az account show

    .\deleteAADAapp.ps1
    ```

## Reference GitHub Repo

[delete-useless-aad-app-by-name-tool](https://github.com/dilin-MS/delete-useless-aad-app-by-name-tool)